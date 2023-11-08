import { defineComponent as u, resolveComponent as r, openBlock as s, createBlock as m } from "vue";
const i = /* @__PURE__ */ u({
  __name: "phone-input",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: n }) {
    const l = ["BY", "UZ", "RU"], t = n, a = (e) => t("update:modelValue", `+${e.dialCode}`), d = (e) => t("update:modelValue", e);
    return (e, c) => {
      const p = r("vue-tel-input");
      return s(), m(p, {
        "model-value": e.modelValue,
        onlyCountries: l,
        mode: "international",
        inputOptions: {
          placeholder: "Введите телефон"
        },
        class: "tw-max-w-[100px] border-solid border-1 !border-gray-standard rounded-lg",
        onCountryChanged: a,
        onOnInput: d
      }, null, 8, ["model-value"]);
    };
  }
}), C = {
  install(o, n = {}) {
    o.component("phone-input", i);
  }
};
export {
  i as PhoneInput,
  C as default
};
