import DialogTitle from "@/components/ui/dialog/DialogTitle.jsx";
import DialogContents from "@/components/ui/dialog/DialogContents.jsx";
import DialogAction from "@/components/ui/dialog/DialogAction.jsx";
import BaseDialog from "@/components/base/BaseDialog.jsx";
import Button from "@/components/base/BaseButton.jsx";

export default function OrganizationRegisterDialog({ open, onClose }) {
  return (
    <BaseDialog className={"w-120"} open={open} onClose={onClose}>
      <DialogTitle>I Want</DialogTitle>
      <DialogContents>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
        <h4>Go Home</h4>
      </DialogContents>
      <DialogAction>
        <Button onClick={onClose} color={"neutral"}>
          서버닫아
        </Button>
        <Button onClick={onClose} color={"primary"}>
          서버닫아
        </Button>
      </DialogAction>
    </BaseDialog>
  );
}
