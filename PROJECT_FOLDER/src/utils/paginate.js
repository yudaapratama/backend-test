const dataPaginate = (data, page, limit) => {
	const { count: totalData, rows } = data
	const currentPage = page ? ++page : 1
	const totalPage = Math.ceil(totalData/limit)

	return {
		total_data: totalData,
		data: rows,
		total_page: totalPage,
		current_page: currentPage
	}
}

const pagination = (page, size) => {
	const limit = size ? +size : 10
	const offset = page ? page*size : 0
	return {
		limit,
		offset
	}
}

module.exports = {
	dataPaginate,
	pagination
}