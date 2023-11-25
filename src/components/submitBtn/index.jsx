import React from "react";
import { useFormContext } from "react-hook-form";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function SubmitBtn() {
  const { handleSubmit, formState } = useFormContext();
  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    // Tu lógica de envío de datos aquí
  };

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={isSubmitting}
      onClick={handleSubmit(onSubmit)}
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar{" "}
          <PaperPlaneTilt size={44} weight="bold" className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
