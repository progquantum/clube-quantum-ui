import { EditProps } from './types';

export function Edit({ color, width, height }: EditProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_6134_18898)"
      >
        <path d="M8 12.63h5.625M10.813 2.318a1.326 1.326 0 111.874 1.875l-7.812 7.813-2.5.624.625-2.5 7.813-7.812z" />
      </g>
      <defs>
        <clipPath id="clip0_6134_18898">
          <path fill={color} d="M0 0H15V15H0z" transform="translate(.5 .13)" />
        </clipPath>
      </defs>
    </svg>
  );
}
