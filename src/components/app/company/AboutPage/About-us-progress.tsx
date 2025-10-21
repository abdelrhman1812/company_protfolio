import { Progress } from "@/components/ui/progress";

type ProgressProps = {
  value: number;
  title: string;
};
const AboutUsProgress = ({ value, title }: ProgressProps) => {
  return (
    <div className="my-5">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xl font-bold text-secondary">{title}</h4>
        <span className="text-secondary font-bold">{value} %</span>
      </div>
      <Progress value={value} />
    </div>
  );
};

export default AboutUsProgress;
