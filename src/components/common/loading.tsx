const LoadingSpinner = ({ color = "" }: { color?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`h-8 w-8 animate-spin rounded-full border-4 border-${
          color ? "[" + color + "]" : "mainColor"
        } border-t-transparent`}
      />
    </div>
  );
};

export default LoadingSpinner;
