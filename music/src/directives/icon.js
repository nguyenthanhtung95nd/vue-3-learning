export default {
  beforeMount(el, binding) {
    const iconClass = `fa fa-${binding.value} float-right text-green-400 text-2xl`;
    // if (binding.arg === 'full') {
    //   iconClass = binding.value;
    // }

    // if (binding.modifiers.right) {
    //   iconClass = ' float-right';
    // }

    // if (binding.modifiers.yellow) {
    //   iconClass = ' text-yellow-400';
    // } else {
    //   iconClass = ' text-green-400';
    // }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
