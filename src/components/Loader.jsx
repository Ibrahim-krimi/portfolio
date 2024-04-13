import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader' style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '5px solid #000', // Noir pour la partie visible du loader
        borderTopColor: 'transparent', // Partie transparente pour l'animation
        animation: 'spin 1s linear infinite'
      }}></span>
      <p
        style={{
          fontSize: 14,
          color: "#484848", // Vous pouvez également changer cette couleur si nécessaire
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;

// Ajout de l'animation CSS pour le spinner
document.head.appendChild(document.createElement('style')).textContent = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

