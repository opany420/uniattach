import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xjvfsffgrmctsalixiaz.supabase.co'
const supabaseKey = 'sb_publishable_xrwrqdyuqmbifqUY93vn5w_kHNFzGUx'

export const supabase = createClient(supabaseUrl, supabaseKey)