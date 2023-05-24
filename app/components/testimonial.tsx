import Avatar from "./Avatar"

interface TestimonialProps {
  userImage: string,
  username: string,
  date: Date,
  message: string
}

const Testimonial: React.FC<TestimonialProps> = ({ userImage, message, username, date }) => {
  return (
    <section className="rounded-lg p-4 flex flex-col gap-6 border">
      <div className="flex gap-4">
        <Avatar image={userImage} height={50} width={50}/>
        <div className="flex flex-col gap-2">
          <p>{username}</p>
          <p className="text-gray-500 text-sm">{ new Date(date).toLocaleDateString() }</p>
        </div>
      </div>
      <p className="text-gray-600 text-md">{ message }</p>
    </section>
  )
}

export default Testimonial