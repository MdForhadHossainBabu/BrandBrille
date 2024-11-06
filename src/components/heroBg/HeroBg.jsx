import ReactPlayer from 'react-player';
import bg from '../../assets/herobg.mp4';

export const HeroBg = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className=" react-player "
        playing="true"
        loop='true'
        muted
        url={bg}
      />
    </div>
  );
};
