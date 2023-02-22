import { NewsService } from "../services/NewsService";
import { Request, Response } from "express";

class NewsController {
	private _service: NewsService;

	constructor() {
		this._service = new NewsService();
	}

	async get(req: Request, res: Response) {
		try {
			const page = req.params.page ? parseInt(req.params.page) : 1;
			const qtd = req.params.qtd ? parseInt(req.params.qtd) : 10;
			const result = await this._service.getAll(page, qtd);
			res.status(200).json({ result });
		} catch (error: any) {
			res.status(500).json({ error: error.message || error.toString() });
		}
	}

	async getById(req: Request, res: Response) {
		try {
			const _id = req.params.id;
			const result = await this._service.get(_id);
			res.status(200).json({ result });
		} catch (error: any) {
			res.status(500).json({ error: error.message || error.toString() });
		}
	}
}

export default new NewsController();
