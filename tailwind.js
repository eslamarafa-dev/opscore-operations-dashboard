tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',
                primaryHover: '#1d4ed8',
                background: '#F9FAFB',
                sidebar: '#111827',
                card: '#FFFFFF',
                border: '#E5E7EB',
                textPrimary: '#111827',
                textSecondary: '#6B7280',
                success: '#16A34A',
                warning: '#F59E0B',
                error: '#DC2626'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
}
