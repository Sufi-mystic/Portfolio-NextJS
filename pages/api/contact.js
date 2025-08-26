export default function handler(req, res){
    if(req.method === 'POST'){
        const {name, email, message} = req.body;

        console.log('Contact Form Submission : ', {name, email, message});

        res.status(200).json({
            success: true,
            message: 'Thank you for your message!'
        })
    } else {
        res.status(405).json({message: 'Method not allowed'})
    }
}