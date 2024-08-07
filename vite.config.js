import {
	defineConfig
} from 'vite'
import uni from "@dcloudio/vite-plugin-uni"
export default defineConfig( ( {
	mode
} ) => {
	const baseUrl = mode === 'development' ? 'http://localhost:8992' : 'https://lesson-api.jc-talent.com'
	// const baseUrl = 'https://lesson-api.jc-talent.com'
	return {
		plugins: [ uni() ],
		define: {
			'process.env': {
				baseUrl
			}
		}
	}
} )
