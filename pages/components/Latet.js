import Image from 'next/image';

const VideoCard = ({ video }) => {
  return (
    <div className="card">
      <Image src={video.thumbnail} alt={video.title} width={320} height={180} />
      <div className="card-body">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.2s;
        }
        .card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-body {
          padding: 16px;
        }
        .card-body h3 {
          margin: 0 0 8px;
          font-size: 1.25rem;
        }
        .card-body p {
          margin: 0;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default VideoCard;
