/** @type {import('tailwindcss').Config} */
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		spacing: {
			'8.5': '2.125rem', // 8.5 * 0.25rem (default spacing scale)
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  		animation: {
  			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			meteor: 'meteor 5s linear infinite',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
  			rippling: 'rippling var(--duration) ease-out',
  			shine: 'shine var(--duration) infinite linear'
  		},
  		keyframes: {
  			ripple: {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-50%, -50%) scale(0.9)'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				},
  				'70%': {
  					opacity: '1'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
  			rippling: {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(2)',
  					opacity: '0'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			}
  		}
  	}
  },
  plugins: [ addVariablesForColors,require("tailwindcss-animate")],
};
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
