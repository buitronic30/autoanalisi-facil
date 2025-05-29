import React, { useState } from 'react';

const AutoanalisisFacial = () => {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Estilos organizados en un objeto para mejor mantenimiento
  const styles = {
    container: { 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    card: { 
      textAlign: 'center', 
      border: '1px solid #e0e0e0', 
      padding: '20px', 
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    },
    title: {
      fontSize: '24px', 
      fontWeight: 'bold', 
      marginBottom: '16px',
      color: '#333'
    },
    button: { 
      padding: '10px 20px', 
      backgroundColor: '#3B82F6', 
      color: '#fff', 
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s'
    },
    disabledButton: {
      opacity: 0.6,
      cursor: 'not-allowed'
    },
    imagePreview: {
      maxHeight: '300px',
      margin: '16px auto',
      borderRadius: '8px',
      display: 'block'
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen debe ser menor a 5MB');
        return;
      }
      setImage(URL.createObjectURL(file));
    }
  };

  const simulateAnalysis = () => {
    setIsLoading(true);
    // Simulamos un análisis de 2 segundos
    setTimeout(() => {
      setStep(3);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div style={styles.container}>
      {/* Paso 1: Bienvenida */}
      {step === 1 && (
        <div style={styles.card}>
          <h1 style={styles.title}>Bienvenido a tu Autoanálisis Facial</h1>
          <p style={{ marginBottom: '16px', color: '#666' }}>
            Sube tu foto para analizar tu piel con inteligencia artificial
          </p>
          <button 
            onClick={() => setStep(2)} 
            style={styles.button}
          >
            Comenzar análisis
          </button>
        </div>
      )}

      {/* Paso 2: Subir foto */}
      {step === 2 && (
        <div style={styles.card}>
          <h2 style={{ ...styles.title, fontSize: '20px' }}>Sube tu foto frontal</h2>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            style={{ margin: '16px auto', display: 'block' }}
            id="file-upload"
          />
          {image && (
            <img 
              src={image} 
              alt="Previsualización para análisis facial" 
              style={styles.imagePreview}
            />
          )}
          <button 
            onClick={simulateAnalysis} 
            disabled={!image || isLoading}
            style={{
              ...styles.button,
              ...(!image || isLoading ? styles.disabledButton : {}),
              marginTop: '16px'
            }}
          >
            {isLoading ? 'Analizando...' : 'Analizar'}
          </button>
        </div>
      )}

      {/* Paso 3: Resultados */}
      {step === 3 && (
        <div style={styles.card}>
          <h2 style={{ ...styles.title, fontSize: '20px' }}>Diagnóstico de tu piel</h2>
          <ul style={{ 
            paddingLeft: '20px', 
            marginBottom: '16px',
            textAlign: 'left',
            color: '#444'
          }}>
            <li style={{ marginBottom: '8px' }}>Zonas secas en mejillas y frente</li>
            <li style={{ marginBottom: '8px' }}>Poros visibles en zona T</li>
            <li style={{ marginBottom: '8px' }}>Textura irregular en pómulos</li>
          </ul>
          <p style={{ marginBottom: '16px', color: '#666' }}>
            ¿Quieres ver tu rutina personalizada?
          </p>
          <button 
            onClick={() => setStep(4)} 
            style={styles.button}
          >
            Ver recomendaciones
          </button>
        </div>
      )}

      {/* Paso 4: Recomendaciones */}
      {step === 4 && (
        <div style={styles.card}>
          <h2 style={{ ...styles.title, fontSize: '20px' }}>Tu rutina personalizada</h2>
          <ul style={{ 
            paddingLeft: '20px', 
            marginBottom: '24px',
            textAlign: 'left'
          }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Limpieza suave:</strong> Gel de limpieza con ácido salicílico.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Hidratación intensa:</strong> Sérum con ácido hialurónico + niacinamida.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Protección solar:</strong> FPS 50 toque seco.
            </li>
          </ul>
          <button 
            onClick={() => setStep(1)} 
            style={{
              ...styles.button,
              backgroundColor: '#6B7280'
            }}
          >
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
};

export default AutoanalisisFacial;
