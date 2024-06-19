

import videos from '@/data/video';
import VideoCard from './Latet';


const Latestvideo = () => {
  return (
    <div className="container">
      <h1 className='text-black text-center'>Lastst  Videos</h1>
      <div className='grid'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default Latestvideo;
