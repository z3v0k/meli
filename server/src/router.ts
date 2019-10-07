import * as express from 'express';
import fetch from 'node-fetch';

class Router {
  constructor(server: express.Express) {
    const router = express.Router();

    router.get('/api/items', (req: express.Request, res: express.Response) => {
      if (req.query.q) {
        fetch(
          encodeURI(
            `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
          )
        )
          .then(response => response.json())
          .then(response => {
            const categories = response.filters.length
              ? response.filters
                  .filter(i => i.id === 'category')[0]
                  .values.map(r => r.path_from_root)[0]
                  .map(h => h.name)
              : [];

            const items = response.results.slice(0, 4).map(e => {
              return {
                id: e.id,
                title: e.title,
                price: {
                  currency: e.currency_id === 'ARS' ? '$' : 'U$D',
                  amount: parseInt(e.price),
                  decimal:
                    e.price.toString().indexOf('.') !== -1
                      ? parseFloat(
                          Math.abs(e.price)
                            .toString()
                            .split('.')[1]
                        )
                      : 0
                },
                picture: e.thumbnail,
                condition: e.condition,
                state_name: e.address.state_name,
                free_shipping: e.shipping.free_shipping
              };
            });
            res.send({ categories, items });
          });
      }
    });

    router.get(
      '/api/items/:id',
      (req: express.Request, res: express.Response) => {
        const item = async () => {
          const response = await fetch(
            encodeURI(`https://api.mercadolibre.com/items/${req.params.id}`)
          );
          return await response.json();
        };

        const desc = async () => {
          const response = await fetch(
            encodeURI(
              `https://api.mercadolibre.com/items/${req.params.id}/description`
            )
          );
          return await response.json();
        };

        Promise.all([item(), desc()]).then(r => {
          const item = r[0];
          const desc = r[1];

          const response = {
            item: {
              id: item.id,
              title: item.title,
              price: {
                currency: item.currency_id === 'ARS' ? '$' : 'U$D',
                amount: parseInt(item.price),
                decimals:
                  item.price.toString().indexOf('.') !== -1
                    ? parseFloat(
                        Math.abs(item.price)
                          .toString()
                          .split('.')[1]
                      )
                    : 0
              },
              picture: item.secure_thumbnail,
              condition: item.condition === 'new' ? 'Nuevo' : 'Algo',
              free_shipping: item.shipping.free_shipping,
              sold_quantity: item.sold_quantity,
              description: desc.plain_text
            }
          };

          res.send(response);
        });
      }
    );

    server.use('/', router);
  }
}

export default Router;
