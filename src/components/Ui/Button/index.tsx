interface PropsButton {
  text: string
  onClick: () => void
}

export default function Button({ text }: PropsButton) {
  return <button>{text}</button>
}
