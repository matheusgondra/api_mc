import { INewsService } from "../contracts/INewsService";
import { Result } from "../infra/Result";
import { NewsRepository } from "../repository/newsRepository";

export class NewsService implements INewsService {
	async get(_id: string) {
		const result = await NewsRepository.findById(_id);
		return result;
	}

	async getAll(page: number, qtd: number): Promise<Result> {
		const result = new Result();
		result.Page = page;
		result.Qtd = qtd;
		result.Total = await NewsRepository.count({});
		result.Data = await NewsRepository.find({})
			.skip(page * qtd - qtd)
			.limit(qtd);
		return result;
	}
}
