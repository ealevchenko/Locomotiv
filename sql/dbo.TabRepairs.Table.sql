USE [loko_nw]
GO
/****** Object:  Table [dbo].[TabRepairs]    Script Date: 18.12.2020 16:00:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TabRepairs](
	[idRepair] [int] NOT NULL,
	[IDNumLoko] [int] NOT NULL,
	[DateTimeStartRepair] [datetime] NOT NULL,
	[DateTimeEndRepair] [datetime] NOT NULL,
 CONSTRAINT [PK_TabRepairs] PRIMARY KEY CLUSTERED 
(
	[idRepair] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TabRepairs]  WITH CHECK ADD  CONSTRAINT [FK_TabRepairs_RefNumLoko] FOREIGN KEY([IDNumLoko])
REFERENCES [dbo].[RefNumLoko] ([idNumLoko])
GO
ALTER TABLE [dbo].[TabRepairs] CHECK CONSTRAINT [FK_TabRepairs_RefNumLoko]
GO
