<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <p :class="uploadItemClasses">
      <component :is="iconFileType" />
      <span>{{ item.file.name }}</span>
    </p>
    <span class="failed-text" v-show="isCanceled">Upload canceled</span>
    <UploadControls :item="item" @cancel="handleCancel" @retry="handleRetry" />
  </li>
</template>

<script>
import { useIconFileType } from "../../../../composable/icon-file-type.js";
import { reactive, onMounted, computed, watch } from "vue";
import filesApi from "../../../../api/files";
import states from "../states";
import UploadControls from "./UploadControls.vue";
import axios from "axios";
import useUploadStates from "../../../../composable/upload-states";

const createFormData = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return formData;
};

const upload = async (upload, source) => {
  try {
    upload.state = states.UPLOADING;
    const { data } = await filesApi.create(createFormData(upload.file), {
      onUploadProgress: (e) => {
        if (e.lengthComputable) {
          upload.progress = Math.round((e.loaded / e.total) * 100);
        }
      },
      cancelToken: source.token,
    });
    upload.state = states.COMPLETE;
    upload.response = data;
  } catch (error) {
    if (axios.isCancel(error)) {
      upload.state = states.CANCELED;
    }
    upload.state = states.FAILED;
    upload.progress = 0;
  }
};
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    UploadControls,
  },
  setup(props, { emit }) {
    const iconFileType = useIconFileType(props.item.file.type);

    const uploadItem = reactive(props.item);
    let source = axios.CancelToken.source();
    onMounted(() => {
      upload(uploadItem, source);
    });

    const handleCancel = () => {
      source.cancel();
    };

    const handleRetry = () => {
      source = axios.CancelToken.source();
      upload(uploadItem, source);
    };

    const { isCanceled } = useUploadStates(uploadItem);

    const uploadItemClasses = computed(() => {
      return {
        "upload-item": true,
        failed: isCanceled.value,
      };
    });

    watch(
      () => [uploadItem.progress, uploadItem.state],
      () => {
        emit("change", uploadItem);
      }
    );

    return {
      iconFileType,
      uploadItem,
      handleCancel,
      handleRetry,
      isCanceled,
      uploadItemClasses,
    };
  },
  emits: ["change"],
};
</script>

<style scoped>
.upload-item {
  line-height: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.upload-item,
.failed-text {
  color: #6c757d;
}

.upload-item span,
.failed-text {
  font-size: 12px;
}

.upload-item span {
  margin-left: 6px;
}

.failed {
  width: 140px;
  color: #212529;
}
</style>
