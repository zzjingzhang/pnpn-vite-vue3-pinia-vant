import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

export default function useScroll(elRef) {
  let el = window;
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight; // 文档高度
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight; // 可滚动区域
    } else {
      clientHeight.value = el.clientHeight; // 文档高度
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight; // 可滚动区域
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  }, 100);
  onMounted(() => {
    if (elRef) {
      el = elRef.value;
    }
    el.addEventListener("scroll", scrollListenerHandler);
  });
  onActivated(() => {
    el.addEventListener("scroll", scrollListenerHandler);
  });
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });
  onDeactivated(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
