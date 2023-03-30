import { useRef, useState, useEffect } from 'react'
import { loadFull as tsParticles } from 'tsparticles'

import './login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const canvasRef  = useRef(null)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Login işlemleri burada yapılabilir
  }
  useEffect(() => {
    const container = document.getElementById('tsparticles')
    // const canvas = canvasRef.current.focus()

    if (canvasRef.current.value) {
        tsParticles
          .loadFull("tsparticles", {
            // tsParticles ayarları burada yer alacak
     
        fpsLimit: 60,
        fullScreen: { enable: true },
        particles: {
          number: {
            value: 50,
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 400,
            random: {
              enable: true,
              minimumValue: 200,
            },
          },
          move: {
            enable: true,
            speed: 10,
            direction: 'top',
            outModes: {
              default: 'out',
              top: 'destroy',
              bottom: 'none',
            },
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
          },
        },
        detectRetina: true,
        themes: [
          {
            name: 'light',
            default: {
              value: true,
              mode: 'light',
            },
            options: {
              background: {
                color: '#f7f8ef',
              },
              particles: {
                color: {
                  value: [
                    '#5bc0eb',
                    '#fde74c',
                    '#9bc53d',
                    '#e55934',
                    '#fa7921',
                  ],
                },
              },
            },
          },
          {
            name: 'dark',
            default: {
              value: true,
              mode: 'dark',
            },
            options: {
              background: {
                color: '#080710',
              },
              particles: {
                color: {
                  value: [
                    '#004f74',
                    '#5f5800',
                    '#245100',
                    '#7d0000',
                    '#810c00',
                  ],
                },
              },
            },
          },
        ],
        emitters: {
          direction: 'top',
          position: {
            x: 50,
            y: 150,
          },
          rate: {
            delay: 0.2,
            quantity: 2,
          },
          size: {
            width: 100,
            height: 0,
          },
        },
      }).then((container) => {
        console.log(container)
      })
    }
    }, [])
      

  return (
    <>
      <div id="tsparticles" ref={canvasRef}></div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Log In</button>
      </form>
    </>
  )
}

export default Login
