export default {
  mask: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: -1
  },
  maskHidden: {
    display: 'none'
  },
  overlay: {
    position: 'fixed',
    display: 'block',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zindex: 999,
    cursor: 'pointer',
  },
  containerHidden: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1
  },
  content: {
    margin: '15% auto',
    backgroundColor: 'white',
    borderradius: '0.25rem',
    width: '50vw',
    padding: '2rem',
    position: 'relative',
  }
};
