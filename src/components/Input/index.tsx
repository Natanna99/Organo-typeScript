import style from "./Input.module.css";

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  nameLabel: string;
  mandatory?: boolean;
  value: string;
  palceholder?: string;
  type?: string;
}

export function Input({
  nameLabel,
  value,
  palceholder,
  type = "text",
  mandatory = false,
  ...props
}: InputInterface) {
  return (
    <div className={style.inputText}>
      <label>{nameLabel}</label>
      <input
        required={mandatory}
        type={type}
        value={value}
        placeholder={palceholder}
        {...props}
      />
    </div>
  );
}
