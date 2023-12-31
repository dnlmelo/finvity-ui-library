import { FC } from 'react';
import './Badge.scss';
import { BadgeProps } from './Badge.types';

const Badge:FC<BadgeProps> = (props) => {
  const size = 'badge-size-'.concat(props.scale? props.scale : 'normal')
  
  return(
    <div className={`badge-base ${size} badge-color-${props.color}`} data-testid="Badge">
      {props.text}
    </div>
    )
  };
  
  export default Badge;
  