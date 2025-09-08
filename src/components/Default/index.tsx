type DefaultProps = {
  id: string;
  labeltext?: string;
} & React.ComponentProps<'input'>;

export function Default({ id, type, labeltext, ...rest }: DefaultProps) {
  return (
    <>
      {labeltext && <label htmlFor={id}>{labeltext}</label>}
      <input id={id} type={type} {...rest} />
    </>
  );
}
