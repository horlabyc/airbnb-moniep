'use client'
import Image from 'next/image'

interface AvatarProps {
  image: string
  height: number
  width: number
}
const Avatar: React.FC<AvatarProps> = ({ image, height, width }) => {
  return (
      <Image
          className='rounded-full'
          height={height}
          width={width}
          alt='Avatar'
          src={image}
      />
  )
}

export default Avatar