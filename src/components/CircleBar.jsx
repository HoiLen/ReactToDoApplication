import { useEffect, useState } from "react";
import Circle from "react-circle";

const CircleBar = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(80)
  },[]);

  return (
    <div css={styles.circleConponent}>
      <Circle
        size='25vw'
        progress={progress}
        animationDuration="1s"
      />
    </div>

  )
}

const styles = {
  circleConponent: {
    marginTop: '50px',
    textAlign: 'center',
  },
}

export default CircleBar