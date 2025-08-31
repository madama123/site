
interface ButtonProps {
  label: string;
  className?: string;
  primary?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ label, className = '', primary = false, onClick, type = 'button' }: ButtonProps) => {
  const baseClasses = "rounded-md font-medium transition-colors duration-200 flex items-center justify-center";
  const primaryClasses = "bg-blue-primary text-white hover:bg-blue-header";
  const secondaryClasses = "bg-blue-100 text-blue-primary hover:bg-blue-200";
  
  return (
    <button 
      type={type}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;