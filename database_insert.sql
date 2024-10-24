create database WebBanHang

INSERT INTO [WebBanHang].[dbo].[Categories] ([Name])
VALUES (N'Giày Đi Bộ');
INSERT INTO [WebBanHang].[dbo].[Categories] ([Name])
VALUES (N'Giày Chạy Bộ');
INSERT INTO [WebBanHang].[dbo].[Categories] ([Name])
VALUES (N'Giày SamBa');

INSERT INTO [WebBanHang].[dbo].[Products] ([Name], [Price], [Description], [ImageUrl], [CategoryId])
VALUES ('iPhone 14', 1000000, 'Latest Apple iPhone 14', '/images/iphone14.jpg', 1);

INSERT INTO [WebBanHang].[dbo].[ProductImages] ([Url], [ProductId])
VALUES ('/images/iphone14_front.jpg', 1),
       ('/images/iphone14_back.jpg', 1);

	   SELECT [Id] FROM [WebBanHang].[dbo].[Products] WHERE [Name] = 'iPhone 14';


	   select * from Products