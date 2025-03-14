const DialogContents = ({ children, className = "" }) => {
  return (
    <div className={`${className} border-t-borderColor max-h-150 min-h-60 w-full overflow-y-auto border-t-2 py-6`}>
      {children}
    </div>
  );
};

export default DialogContents;
