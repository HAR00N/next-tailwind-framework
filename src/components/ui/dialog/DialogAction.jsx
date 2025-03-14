import Spacer from "@/components/ui/Spacer.jsx";

const DialogAction = ({ children }) => {
  return (
    <div className={"flex w-full gap-2 pt-4"}>
      <Spacer />

      {children}
    </div>
  );
};

export default DialogAction;
