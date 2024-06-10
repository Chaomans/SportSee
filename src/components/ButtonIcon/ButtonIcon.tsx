type ButtonIconProps = {
  name: string;
  icon: string;
};

const ButtonIcon = ({ name, icon }: ButtonIconProps) => {
  return (
    <div>
      {name} - {icon}
    </div>
  );
};

export default ButtonIcon;
