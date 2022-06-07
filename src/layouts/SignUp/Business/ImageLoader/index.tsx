import Image, { ImageProps } from 'next/image'

export function ImageLoader ({ ...props }: ImageProps) {
  return (
    <Image
      width={385}
      height={373}
      {...props}
    />
  )
}
