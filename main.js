import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 🔁 HIER deine echten Daten eintragen:
const supabaseUrl = 'https://stnvlbjltxbuxnmpfnil.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0bnZsYmpsdHhidXhubXBmbmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0MjI1MzAsImV4cCI6MjA3MDk5ODUzMH0.2hHoQbWN5LfykrC377ph2NMxyD2Qkc4m6CRhzu42m6A'
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.getElementById('login-form')
const errorEl = document.getElementById('error')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    errorEl.textContent = "Fehler: " + error.message
  } else {
    // Login erfolgreich → Weiterleitung
    window.location.href = "dashboard.html"
  }
})
