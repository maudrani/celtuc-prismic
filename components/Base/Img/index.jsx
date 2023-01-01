import Image from 'next/image';

function Img(props) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
      {...props.containerProps}
      className={props.className}
    >
      <Image
        alt="Image Alt"
        layout="fill"
        objectFit="contain"
        src={props.src || ''}
        {...props}
      />
    </div>
  );
}

export default Img;
