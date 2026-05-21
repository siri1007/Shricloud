// // export async function POST(req) {
// //   try {
// //     const { domain } = await req.json();

// //     if (!domain) {
// //       return Response.json(
// //         { error: "Domain is required" },
// //         { status: 400 }
// //       );
// //     }

// //     const API_KEY = process.env.NAMESILO_API_KEY;

// //     const url = `https://www.namesilo.com/api/checkRegisterAvailability?version=1&type=json&key=${API_KEY}&domains=${domain}`;

// //     const res = await fetch(url);
// //     const data = await res.json();

// //     // NameSilo response format:
// //     // data.reply.available = "yes" or "no"

// //     const available =
// //       data?.reply?.available === "yes" ||
// //       data?.reply?.available === 1;

// //     return Response.json({
// //       domain,
// //       available,
// //     });

// //   } catch (error) {
// //     return Response.json(
// //       { error: "Server error" },
// //       { status: 500 }
// //     );
// //   }
// // }




// export async function POST(req) {
//   try {

//     const { domain } = await req.json();

//     const API_KEY = process.env.NAMESILO_API_KEY;

//     const response = await fetch(
//       `https://www.namesilo.com/api/checkRegisterAvailability?version=1&type=json&key=${API_KEY}&domains=${domain}`
//     );

//     const data = await response.json();

//     const available =
//       data?.reply?.available === "yes";

//     return Response.json({
//       domain,
//       available,
//     });

//   } catch (error) {

//     return Response.json(
//       { error: "Server Error" },
//       { status: 500 }
//     );

//   }
// }



// -------


export async function POST(req) {

  try {

    const { domain } = await req.json();

    const API_KEY =
      process.env.NAMESILO_API_KEY;

    const tlds = [
      ".com",
      ".in",
      ".co",
      ".net",
      ".org",
    ];

    const pricing = {
      ".com": 999,
      ".in": 699,
      ".co": 899,
      ".net": 1099,
      ".org": 999,
    };

    const results = await Promise.all(

      tlds.map(async (tld) => {

        const fullDomain =
          domain + tld;

        const response = await fetch(
          `https://www.namesilo.com/api/checkRegisterAvailability?version=1&type=json&key=${API_KEY}&domains=${fullDomain}`
        );

        const data = await response.json();

        return {
          domain: fullDomain,
          available:
            data?.reply?.available === "yes",
          price: pricing[tld],
        };
      })
    );

    return Response.json(results);

  } catch (error) {

    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );

  }
}