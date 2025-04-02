
interface TrapCircleProps {
  number: number;
}

const TrapCircle = ({ number }: TrapCircleProps) => {
  return (
    <div className="trap-circle">
      {number}
    </div>
  );
};

export default TrapCircle;
