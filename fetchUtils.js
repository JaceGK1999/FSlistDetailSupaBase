const SUPABASE_URL = 'https://edmczxuwjcwwnsmabezz.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbWN6eHV3amN3d25zbWFiZXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0MjEsImV4cCI6MTk1OTkxNzQyMX0.HouVg2N-Lni_g52lrL1Jla7gOhh61sUGEGckeyC8hnE';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getAllFoods() {
    const resp = await client.from('food').select('*');
    return checkError(resp);
}

export async function getFoodById(id) {
    const resp = await client.from('food').select('*').eq('id', id).single();

    return checkError(resp);
}
