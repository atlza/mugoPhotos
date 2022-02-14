module.exports = {
    theme: {
      extend: {}
    },
    purge: {
        enabled: process.env.HUGO_ENVIRONMENT === "production",
        content: ["./themes/mugophoto/**/*.html", "./content/**/*.md", "./content/**/*.html"],
    },    
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
    ]
  }

  
