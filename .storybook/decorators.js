import { grey } from '@mui/material/colors';

export const tileCanvasDecorator = Story => (
  <div
    style={{
      width: '30vh',
      height: '30vh',
      backgroundImage:
        'linear-gradient(45deg, #202020 25%, transparent 25%), linear-gradient(-45deg, #202020 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #202020 75%), linear-gradient(-45deg, black 75%, #202020 75%)',
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
      border: '2vh solid grey',
    }}
  >
    <Story />
  </div>
);
