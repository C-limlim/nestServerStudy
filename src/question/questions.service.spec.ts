import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from './app.service'

import { TypeOrmModule } from '@nestjs/typeorm'
import { getRepository, Repository } from 'typeorm'
import { question } from '../entities/question.entity'

describe('QuestionsService', () => {
	let service: AppService
	let questionRepository: Repository<question>

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				TypeOrmModule.forRoot({keepConnectionAlive: true}),
				TypeOrmModule.forFeature([question]),
			],
			providers: [AppService],
		}).compile()

		service = module.get<AppService>(AppService)
		questionRepository = getRepository(question)
	})

	it('Should be get all questions', async () => {
		const questions =  await service.findAll()
		const questionsInDb =  await questionRepository.find()

		expect(questions).toEqual(questionsInDb)
	})

	// it('Should be create question', async () => {
	// 	const test_ques: question = {"id": "4", "ques": "감자의 별병은?", "ans": "김재훈"}
	// 	await service.insert(test_ques)

	// 	const data = await questionRepository.findOne({id: "4"})

	// 	expect(data).not.toBeNull()
	// 	expect(data.id).toBe(4)
	// })

	// it('Should be throw error: ER_DUP_ENTRY', async () => {
	// 	const question = 'GDFSGRHBTRB'
	// 	await service.create({ content: question })
	// 	try {
	// 		await service.create({ content: question })
	// 	} catch (e) {
	// 		expect(e.code).toBe('ER_DUP_ENTRY')
	// 	}
	// })
})