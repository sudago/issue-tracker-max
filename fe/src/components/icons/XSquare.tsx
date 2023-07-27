type Props = {
  width?: number;
  height?: number;
  stroke?: string;
};

export const XSquare: React.FC = ({}: Props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2999 4.70026L4.70025 11.2999M4.7002 4.7002L11.2999 11.2999"
        stroke="#4E4B66"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
