tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0071e3',
                secondary: '#f5f5f7',
                dark: '#1d1d1f',
            },
            fontFamily: {
                sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
                'all': 'all',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'spin-slow': 'spin 2s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    }
}
