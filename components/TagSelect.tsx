import Select from "react-select"
import { Tag } from "storage/quest"

interface Option {
  value: Tag
  label: Tag
}

export default function TagSelect({ field, form, options, isMulti }) {
  const onChange = (option: Option | Option[]) => {
    form.setFieldValue(
      field.name,
      (option as Option[]).map((item: Option) => item.value)
    )
  }

  const getValue = () => {
    if (options) {
      options.filter((option: Option) => field.value.indexOf(option.value) >= 0)
    } else {
      return []
    }
  }

  return (
    <Select
      name={field.name}
      options={options}
      isMulti={isMulti}
      onChange={onChange}
      value={getValue()}
    />
  )
}
