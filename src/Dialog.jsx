export default function Dialog() {
  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}><div style={{
      display: 'flex',
      fontSize: '1.5rem',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      transform: 'translate(-50%, -50%)',
    }}>
      <h2>Certeza?</h2>
      <button onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}>Sim</button>
      <button onClick={() => {
        window.location.reload();
      }}>Não</button>
    </div>
      </div>
  )
}