import style from "./Input.module.css";

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  nameLabel: string;
  mandatory?: boolean;
  value: string;
  palceholder?: string;
}

export function Input({
  nameLabel,
  value,
  palceholder,
  mandatory = false,
  ...props
}: InputInterface) {
  return (
    <div className={style.inputText}>
      <label>{nameLabel}</label>
      <input
        required={mandatory}
        value={value}
        placeholder={palceholder}
        {...props}
      />
    </div>
  );
}
