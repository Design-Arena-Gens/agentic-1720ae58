'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 80px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '48px',
          margin: '0 0 20px 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Hello! 👋
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Welcome to your interactive web app
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: '15px 30px',
              fontSize: '24px',
              border: 'none',
              borderRadius: '10px',
              background: '#667eea',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              fontWeight: 'bold'
            }}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            −
          </button>

          <div style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#333',
            minWidth: '120px'
          }}>
            {count}
          </div>

          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: '15px 30px',
              fontSize: '24px',
              border: 'none',
              borderRadius: '10px',
              background: '#764ba2',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              fontWeight: 'bold'
            }}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            +
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          style={{
            padding: '10px 25px',
            fontSize: '14px',
            border: '2px solid #667eea',
            borderRadius: '8px',
            background: 'transparent',
            color: '#667eea',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontWeight: '600'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#667eea';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#667eea';
          }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
